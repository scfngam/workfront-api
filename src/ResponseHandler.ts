type TSuccessHandler<T = any> = (response: any) => Promise<T>
type TFailureHandler = (err: any) => never

export class ResponseHandler {
    static success: TSuccessHandler<any> = function(response) {
        if (response.ok) {
            return response.json().then(
                (data) => {
                    if (data.error) {
                        throw {
                            status: response.status,
                            message: data.error.message
                        }
                    }
                    return data.data
                }
            )
        }
        else {
            return response.json().then(
                (data) => {
                    throw {
                        status: response.status,
                        message: data.error.message
                    }
                },
                () => {
                    throw {
                        status: response.status,
                        message: response.statusText
                    }
                }
            )
        }
    }
    static failure: TFailureHandler = function(err) {
        throw {
            message: err.message || err.statusText
        }
    }
}
