 # api_fullstack


 >> Status: completo
 
 ## API CADASTRO
> Este é um projeto no qual existe um Frontend e um Backend ambos um crud, cadastro de developer e level. 
Onde são gerados uma imagen virtual no Docker e cadastrados num servidor virtual MySql.
Ambos estam cadastrando e retornando um JSON. 

### Para adicionar um conteudo de teste no front ou no back é só adicionar no insomnia :

 DEVELOPER:
<table>
  <tr>
    <td>
      nome: | nivel:  | sexo: | datanascimento: | idade: | hobby: 
    </td>
  </tr> 
</table>
  
 NIVEL
<table>
  <tr>
    <td>
      nivel: 
    </td>
  </tr> 
</table>



### Tecnologias usadas:
 Backend
<table>
    <td>
      Docker
    </td>
    <td>
      dbeaver.ce
    </td>
    <td>
      MySql
    </td>
    <td>
      node.js
    </td>
    <td>
      javascript
    </td>
</table>

  
 Frontend
  
  <table>
    <tr>
     <td>
       Angular
     </td>
     <td>
      Javascript
     </td>
    </tr>
  </table>
  
  
 
>>Container id image docker :  

c5e87b3a3c4e   mysql:8 "docker-entrypoint.s…"  33060/tcp, 0.0.0.0:3307-3306/tcp, :::3307->3306/tcp   mysql



  + version: '3.3'
  + services:
  + db:
  + - image: mysql
  + - restart: always
  + environment:
  + - MYSQL_DATABASE: 'db'
  + - MYSQL_USER: 'root'
  + - MYSQL_PASSWORD: 'admin'
  + - MYSQL_ROOT_PASSWORD: 'admin'
  + ports:
  + - '3306:3306'
  + expose:
  + - '3306'
  + volumes:
  + - my-db:/var/lib/mysql
  + volumes:
  + my-db:

>>Como estão indo todas as instalações no git, para iniciar a aplicação e testar com insomnia é so dar o npm start e usar as aplicações.




