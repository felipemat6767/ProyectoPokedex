export const getState = ({ setStore, getStore, getActions }) => {

  return {
    store: {
      event: [],
      names:[]
    },
    actions: {
      setInfo: () => {
        fetch("http://localhost:8070/pokemon", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((respuesta) => respuesta.json())
          .then((dato) => setStore({ event: dato }))
          .catch((error) => console.error(error));
      },
      getName: (item) => {
        const store = getStore();
        setStore({ names: store.names})
      }
    },
  };
};