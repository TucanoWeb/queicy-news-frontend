import { Dispatch, SetStateAction } from "react";
import Swal from "sweetalert2";
import useNews from "../../hooks/news/useNews";

interface IProps {
  setShowDelete: Dispatch<SetStateAction<boolean>>;
  params: { id: number };
  refresh: () => void;
}

const AlertDeleteNews = ({ setShowDelete, params, refresh }: IProps) => {
  // hooks
  const { destroyNews } = useNews();

  const showAlert = async () => {
    Swal.fire({
      title: "Você confirma a exclusão desse registro?",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await destroyNews(params.id)
          .then(() => Swal.fire("Excluído!", "", "success"))
          .catch(() => Swal.fire("Houve um erro na exclusão do item", "", "error"))
          .finally(() => {
            setShowDelete(false);
            refresh();
          });
      }
    });
  };

  showAlert();

  return <div></div>;
};

export default AlertDeleteNews;
