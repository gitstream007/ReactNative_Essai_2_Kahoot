import base64 from 'react-native-base64'
import ConstantsAPI from "../ConstantsAPI";

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': ''
};

const url = 'http://127.0.0.1:3000/admin/login';
//const url = 'https://facebook.github.io/react-native/movies.json';

class APIService{
    static  FetchFunction(username, password) {

        //headers
        return fetch(url, {method: 'GET', headers: headers, body: JSON.stringify({
                username: username,
                password: password
            })} )
            .then((response) =>
                {
                    console.log(response._bodyText);

                    if (response._bodyText.status == 'SUCCESS') {
                        // Save Token for future use
                    } else {
                        // response._bodyText.message
                    }
                }
            ).catch((err) => {

                console.log(err);
            });
    }
}
export default APIService;
