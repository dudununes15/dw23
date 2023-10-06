const medicos = [
    {
      nome: 'Aline',
      sobrenome: 'Flores',
      genero: 'feminino',
      imagemPerfil: 'https://placekitten.com/410/410'
    },
    {
      nome: 'Eduardo',
      sobrenome: 'Nunes',
      genero: 'masculino',
      imagemPerfil: 'https://placekitten.com/435/435'
    },
    {
      nome: 'Lucca',
      sobrenome: 'Barcellos',
      genero: 'nao-binario',
      imagemPerfil: 'https://placekitten.com/455/455'
    },
  ];
  
  htmlList = document.querySelector('#medicos');
  apresentacao = ``;
  
  for(let medico of medicos){
    let img = document.createElement('img');
    img.src = medico.imagemPerfil;
    htmlList.appendChild(img);
  
    let p = document.createElement('p');
    p.src = medico.genero;
    htmlList.appendChild(p);
  
    switch(medico.genero){
      case 'nao-binario':
            apresentacao = `Dr(e). ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'feminino':
            apresentacao = `Dr(a). ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'masculino':
            apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
           break;
        
    }
    p = document.createElement('p');
    p.textContent = apresentacao;
    htmlList.appendChild(p);
  }