import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function fetchImages(name, language) {
    const KEY = '4092c7739033aaf55788405d99619a68';
    const URL = 'https://api.openweathermap.org/data/2.5/';
    return fetch(`${URL}weather?q=${name}&appid=${KEY}&units=metric&lang=${language}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            toast.error("Город с таким именем отсутсвует");
            return Promise.reject(new Error('Город с таким именем отсутсвует'))
        }).then(data => data);
}

