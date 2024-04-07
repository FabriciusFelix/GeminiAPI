import useForm from "./UseForm";

const FORM_ENDPOINT = "http://127.0.0.1:7070"; // TODO - update to the correct endpoint

const Form = () => {
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
     <div className="pt-0 mb-3">
        <textarea
          placeholder="Sua Pergunta"
          name="prompt"
          required
        />
      </div>
      {status !== "loading" && (
        <div className="pt-0 mb-3">
          <button type="submit">
            Send a message
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;