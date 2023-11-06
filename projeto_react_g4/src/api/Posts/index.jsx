import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({
  titulo: yup.string().required("Preencha o título").max(40, "Até 40 caract."),
  descricao: yup
    .string()
    .required("Preencha a descrição")
    .max(100, "Até 100 caract."),
//   conteudo: yup
//     .string()
//     .required("Preencha o conteúdo")
//     .max(300, "Até 300 caract."),
// });
  dataFabricacao: yup
  .string()
  .required("Preencha uma data válida")
  .max(99999, "Até 300 caract."),
  qntdEstoque: yup
  .number()
  .required("Preencha uma quantidade válida")
  .max(300, "Até 300 caract."),
  valorUnitario: yup
  .number()
  .required("Preencha um valor válido")
  .max(300, "Até 300 caract."),
});

export default function Posts() {
  let navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
    formState: { errors }} = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios
      .post("https://6542e1c401b5e279de1fb01e.mockapi.io/produtos", data)
      .then(() => {
        console.log("deu certo");
        navigate("/");
      })
      .catch(() => {
        console.log("deu errado !");
      });

  return (
    <div>
      {/* <Header /> */}
      <main>
        <div id="card-post2">
          {/* <div id="ee"> */}
            <h1 className="titlePost">Criar produto</h1>
          
          <hr />
          <div className="card-body-post">
            <form action="#" onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label htmlFor="titulo">Titulo</label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  {...register("titulo")}
                />
                <p className="error-message">{errors.titulo?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="descricao">Descrição</label>
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  {...register("descricao")}
                />
                <p className="error-message">{errors.descricao?.message}</p>
              </div>

              

              <div className="fields">
                <label htmlFor="dataFabricacao">Data de Fabricação</label>
                <input
                  type="text"
                  id="dataFabricacao"
                  name="dataFabricacao"
                  {...register("dataFabricacao")}
                />
                <p className="error-message">
                  {errors.dataFabricacao?.message}
                </p>
              </div>

              <div className="fields">
                <label htmlFor="qntdEstoque">Quantidade no estoque</label>
                <input
                  type="number"
                  id="qntdEstoque"
                  name="qntdEstoque"
                  {...register("qntdEstoque")}
                />
                <p className="error-message">{errors.qntdEstoque?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="valorUnitario">Valor do produto</label>
                <input
                  type="number"
                  id="valorUnitario"
                  name="valorUnitario"
                  {...register("valorUnitario")}
                />
                <p className="error-message">{errors.valorUnitario?.message}</p>
              </div>

              <div className="btn-post">
                <button>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      {/* </div> */}
    </div>
  );
}
