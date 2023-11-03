import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const validationPost = yup.object().shape({
  titulo: yup.string().required("Preencha o título").max(40, "Até 40 caract."),
  descricao: yup
    .string()
    .required("Preencha a descrição")
    .max(100, "Até 100 caract."),
  conteudo: yup
    .string()
    .required("Preencha o conteúdo")
    .max(300, "Até 300 caract."),
  dataFabricacao: yup.date().required("Preencha uma data válida"),
  qntdEstoque: yup.number().required("Preencha uma quantidade válida"),
  valorUnitario: yup.number().required("Preencha um valor válido"),
});

export default function Posts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) => console.log(data);
  return (
    <div>
      <Header />

      <div className="slider">
        <div className="slides">
          <input
            className="inputChato"
            type="radio"
            name="form-btn"
            id="card-post1"
          />
          <input
            className="inputChato"
            type="radio"
            name="form-btn"
            id="card-post2"
          />
          <input
            className="inputChato"
            type="radio"
            name="form-btn"
            id="card-post3"
          />

          <div className="slide first">
            <div id="card-post1">
              <div id="ee">
                <h1 className="titlePost">Criar categoria</h1>
              </div>
              <hr />
              <div className="card-body-post">
                <form action="#" onSubmit={handleSubmit(addPost)}>
                  <div className="fields">
                    <label htmlFor="titulo">Nome da categoria</label>
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

                  <div className="btn-post">
                    <button>Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="slide">
            <div id="card-post2">
              <div id="ee">
                <h1 className="titlePost">Criar produto</h1>
              </div>
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
                      type="date"
                      id="dataFabricacao"
                      name="dataFabricacao"
                      {...register("dataFabricacao")}
                    />
                    <p className="error-message">{errors.dataFabricacao?.message}</p>
                  </div>

                  <div className="fields">
                  <label htmlFor="qntdEstoque">Quantidade no estoque</label>
                  <input type="number" id="qntdEstoque" name="qntdEstoque" {...register("qntdEstoque")} />
                  <p className="error-message">{errors.qntdEstoque?.message}</p>

                  </div>

                  <div className="fields">

                    <label htmlFor="valorUnitario">Valor do produto</label>
                    <input type="number" id="valorUnitario" name="valorUnitario" {...register("valorUnitario")} />
                    <p className="error-message">{errors.valorUnitario?.message}</p>
                  </div>

                  <div className="btn-post">
                    <button>Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="slide">
            <div id="card-post3">
              <div id="ee">
                <h1 className="titlePost">Criar pedido</h1>
              </div>
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
                    <label htmlFor="conteudo">Conteúdo</label>
                    <textarea
                      cols="30"
                      rows="10"
                      type="text"
                      id="conteudo"
                      {...register("conteudo")}
                    ></textarea>
                    <p className="error-message">{errors.conteudo?.message}</p>
                  </div>

                  <div className="btn-post">
                    <button>Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="card-post1" className="manual-btn">
            Categoria
          </label>
          <label htmlFor="card-post2" className="manual-btn">
            Produto
          </label>
          <label htmlFor="card-post3" className="manual-btn">
            Pedido
          </label>
        </div>
      </div>
    </div>
  );
}
