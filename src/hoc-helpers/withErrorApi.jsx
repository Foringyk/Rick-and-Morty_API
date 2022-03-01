import { useState } from "react";
import ErrorMessage from '../components/ErrorMessage'

export const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(false);
        console.log(errorApi)

        return (
            <>
                {errorApi
                    ? <ErrorMessage errorApi={errorApi}/>
                    : (
                        <View
                            setErrorApi = {setErrorApi}
                            {...props}
                        />
                    )
                }
            </>
        )
    }
}