import QrReader from 'react-qr-reader';
import React, {useState} from 'react';

const MyQrReader = () => {
    const [result, setResult] = useState('No Result');

    const handleScan = (data:any) => {
        if (data) {
            setResult(data)
        }
    };

    const handleError:any = (err:any) => {
        console.error(err)
    };

    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <p>{result}</p>
        </div>
    )
};

export default MyQrReader;