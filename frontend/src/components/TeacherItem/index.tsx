import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from './../../services/api';


export interface Teacher {
  id: number,
  avatar: string,
  name: string,
  subject: string,
  bio: string,
  cost: number,
  whatsapp:string
}

interface TeacherItemProps {
  teacher: Teacher
}



const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.id
    })
  }
  
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar || `https://api.adorable.io/avatars/285/${teacher.name}.png`} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/Hora
             <strong>R${teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
             Entrar em contato
           </button>
        </a>
       
      </footer>

    </article>
  );
}

export default TeacherItem;