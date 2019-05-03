require("dotenv").config();

const [conta, saldo] = process.argv.slice(2);

console.log(conta, saldo);

const carregarSaldo = async () => {
  try {
    const conn = await require("./mysql")();

    const [status] = await conn.query(
      "UPDATE accounts SET balance = ? WHERE number = ?",
      [saldo, conta]
    );

    conn.close();

    if (status.affectedRows === 1) {
      console.log("Alteração efetuada com sucesso !!!");
    } else {
      console.log("Pode ter ocorrido algum erro: ");
      console.log(status);
    }
  } catch (error) {
    console.log("Um erro ocorreu: ");
    console.log(error);
  }
};

carregarSaldo();
