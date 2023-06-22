import { useState } from "react";
import React, {useEffect} from 'react';
import axios from 'axios';
import Logo from "../img/logo.png";
import "../css/Main.css";
import Header from "./Header";
import Cocktail from "../cocktail.json"

function Main() {
     const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setUsers(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'http://3.39.190.51:8080/cocktail/list'
          );
          setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUsers();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <div>
           <Header/>
            <table>
                
            {users.map(user => (
                <div key={user.number}>
                    <tr>
                        <td><img id = "MainImg" src={user.url}></img></td>
                        <td>{user.name}</td>
                        <td>{user.ingredients}</td>
                        <td>{user.instruction}</td>
                        <td>{user.alcohol}</td>
                        <td>{user.sweet}</td>
                    </tr>
                </div>
            ))}
            </table>
        </div>
    );
  }


export default Main;