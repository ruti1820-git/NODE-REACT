import React, { useEffect, useState } from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useLoginMutation } from './authApiSlice';
import { setToken } from './AuthSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../../css/Login.css"; 

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isSuccess, isLoading, data, error }] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) {
            console.log(data);
            dispatch(setToken({ token: data }));
            navigate("/");
        }
    }, [isSuccess, data, dispatch, navigate]); 

    const handleLogin = () => {
        login({ username, password });
    };
    const handleSignup = () => {
        navigate("/Register"); 
    };

    return (
        <div className="card"> 
            <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <h2>התחברות</h2> 
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="username" className="w-6rem">שם משתמש</label>
                        <InputText
                            id="username"
                            type="text"
                            className="w-12rem"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="הכנס שם משתמש"
                        />
                    </div>
                    <br></br>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="password" className="w-6rem">סיסמא</label>
                        <InputText
                            id="password"
                            type="password"
                            className="w-12rem"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="הכנס סיסמא"
                        />
                    </div>
                    <br></br>
                    <Button
                        label={isLoading ? "מתחבר..." : "התחברות"} 
                        icon="pi pi-user"
                        className="w-10rem mx-auto"
                        onClick={handleLogin}
                        disabled={isLoading} 
                    />
                    {isError && <small className="p-error block">שם משתמש או סיסמא שגויים</small>} 
                </div>

                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>או</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>או</b>
                    </Divider>
                </div>

                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="הרשמה" icon="pi pi-user-plus" severity="success" className="w-10rem" onClick={handleSignup}></Button>
                </div>
            </div>
        </div>
    );
}