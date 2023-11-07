import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({

  nome: yup.string().required("Preencha o título").max(40, "Até 40 caract."),
  descricao: yup
    .string()
    .required("Preencha a descrição")
    .max(100, "Até 100 caract."),

  dataFabricacao: yup.date().required("Preencha uma data válida"),
  qntdEstoque: yup.number()
    .required("Preencha uma quantidade válida")
    .max(300, "Até 300 caract."),
  valorUnitario: yup.number()

    .required("Preencha um valor válido")
    .max(300, "Até 300 caract."),
});

export default function Posts() {
  let navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios

      .post("http://localhost:8080/api/produto/salvar", data)
      .then(() => {
        console.log("deu certo");
        navigate("/produto");

      })
      .catch(() => {
        console.log("deu errado !");
      });

  return (
    <div>

      <main className="main-post">

        <div id="card-post2">
          {/* <div id="ee"> */}
          <h1 className="titlePost">Criar produto</h1>

          <hr />
          <div className="card-body-post">
            <form id="form-post" action="#" onSubmit={handleSubmit(addPost)}>
              <div className="fields">

                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  {...register("nome")}
                />
                <p className="error-message">{errors.nome?.message}</p>

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

                  type="date"

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
                <button id="btn-enviar">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      {/* </div> */}
    </div>
  );
}
