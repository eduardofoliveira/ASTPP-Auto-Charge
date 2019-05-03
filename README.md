## Como instalar

1 - Instalar o Nodejs versão LTS

    sudo apt-get install curl software-properties-common
    curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

2 - Instalar o Git e Clonar repositorio

    sudo apt install git
    git clone https://github.com/eduardofoliveira/ASTPP-Auto-Charge.git

3 - entrar na pasta e rodar o comando npm install
4 - rode o comando cp .env.example .env para fazer uma copia do arquivo .env.example em .env

    MYSQL_HOST=127.0.0.1
    MYSQL_USER=root
    MYSQL_PASS=senha_super_segura
    MYSQL_DATABASE=astpp

5 - nano .env e preencha os campos com os seus dados de acesso ao mysql
6 - Para executar rode o comando node index.js [id_da_conta][saldo]

    Exemplo node index.js 6145679936 100
