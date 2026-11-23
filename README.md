# Codigos de git 

git init
- iniciar novo projeto com git 

git add <Nome-do-arquivo>/.
- prepara os aquivos para serem commitados 

git commit -m "mensagem do commit"
- commita os arquvos preparados 

git log 
- mostra os ultimos commits 
- aperte a tecla "Q" para sair

git status 
- mostra o estado da ramificação/branch atual (ex:coisas para cerem comitadadas, alterações preparadas, etc. )

git diff 
- mostra o que foi alterado na ramificação/branch atual ou se teve alteração
- aperte a tecla "Q" para sair

git merge 
- mescla as ramificações/branches 

git branch 
- mostra a branch atual

git checkout -b <nome-da-brach>
- cria uma nova branch a partir do histórico da branch atual que estamos 

git checkout <nome-da-brach>
- muda para a brach especificada

git remote add <nome-remoto> <url>
- adiciona um novo repositorio remoto 

git push <nome-remoto> <nome-branch>
- manda nossas alterações locais para o repositorio remoto, para cada branch

git pull <nome-remoto> <nome-branch>
- pega as alterções do repositório remoto e joga para nossa maquina 

git fetch 
- atualiza o nova historico local de acordo com o historico salvo no repositorio remoto 
- sincronização do local com o remoto 

git clone <url>
- clona as informações/arquivos do repositorio remoto 

git clone -b <nome-da-branch> <url>
- clona uma branch especifica do repositorio remoto 

git remote add origin <url> 
- adiciona um repositorio remoto no seu projeto/maquina

git branch -d <nome-da-branch>
- deleta uma branch da sua maquina 
- CUIDADO!!!

git push origin --delete <nome-da-branch>
- deleta uma branch do repositorio remoto
- CUIDADO!!!

git revert HEAD
- reverte a ultima alteração ja enviada para o repositório remoto

git revert <Codigo-do-commit>

- reverte uma alteração especifica enviada para o repositório remoto
- use git log para saber o <Codigo-do-commit>


configura o git com o meu usuario e senha 
git config --global user.name "luizao1ds"
git config --global user.email "luizgomesdossantos.ds@gmail.com"