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
      .get("https://6542e1c401b5e279de1fb01e.mockapi.io/produtos")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Deu errado !");
      });
  }, []);

  function deletePost(id) {
    axios.delete(`https://6542e1c401b5e279de1fb01e.mockapi.io/produtos/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div>
      <Header />
      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{post.titulo}</h2>
                </header>
                <div className="line"></div>
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
