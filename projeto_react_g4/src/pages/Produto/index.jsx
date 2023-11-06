import { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Produto() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/produto/listar")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Deu errado !");
      });
  }, []);

  function deletePost(id) {
    axios.delete(`http://localhost:8080/api/produto/deletar/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div>
      
      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header className="title-prod">
                  <div className="title-card">
                  <h1 id="post-title">{post.titulo}</h1>
                    <img src={`https://loremflickr.com/320/240/${post.titulo}`} alt="era pra ser uma imagem aqui" className="img-card"/>
                  </div>
                </header>
                <div className="line"></div>
                <p>R${post.valorUnitario}</p>
                <p>{post.descricao}</p>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={`/update/${post.id}`}>
                      <button>Editar</button>
                    </Link>
                  </div>
                  <div className="btn-readmore">
                    <Link to={`/more/${post.id}`}>
                      <button>Ler Mais</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deletePost(post.id)}>Apagar</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
