angular.module('starter.controllers',[])
  .controller('IndexCtrl',function($state, $scope){
    //variaveis da animacao
    var title = "#indexTitle";
    var lead = "#indexLead";
    var rhythms = "#indexRhythms";
    var logo = "#logo";
    var imgLogo = "#imgLogo";
    listRhytms = ["Rock","Samba","Axé","Sertanejo", "Funk", "Eletrônico", "Tecnobrega"];

    //definicao da variavel da animação
    var tl = new TimelineMax({
      onComplete: function(){ //esta funcao define que ao se completar a timeline, ela deve voltar para o checkpoint denominado "loop"
        tl.seek("loop");
      }
    });

    //definindo o tamanho e posicionando os elementos
    tl.set(title, {y: window.innerHeight * 0.1, x: (window.innerWidth/2 - document.getElementById('indexTitle').offsetWidth/2)})
      .set(imgLogo, {width: window.innerWidth * 0.5})
      .set(logo, {y: window.innerHeight * 0.2, x: (window.innerWidth/2 - document.getElementById('logo').offsetWidth/2)})
      .set(lead, {y: window.innerHeight * 0.6, x: (window.innerWidth/2 - document.getElementById('indexLead').offsetWidth/2)})
      .set(rhythms, {y: window.innerHeight * 0.7});

    //deixando os elementos invisiveis
    tl.set(title, {autoAlpha: 0})
      .set(logo, {autoAlpha: 0})
      .set(lead, {autoAlpha: 0})
      .set(rhythms, {autoAlpha: 0});

    //realizando a animação
    tl.to(title,5,{autoAlpha:1})
    .to(logo,5,{autoAlpha:1,delay:-3})
    .to(lead,2,{autoAlpha:1,delay:-3});

    //ritmos em loop
    tl.add("loop") //cria um checkpoint na animacao
    for(let r of listRhytms){
      tl.set(rhythms, {text: "<i class=\"icon ion-music-note\"></i>  "+ r +"  <i class=\"icon ion-music-note\"></i>", x:0});
      tl.to(rhythms,2,{autoAlpha:1})
        .to(rhythms,5,{x: window.innerWidth,delay:-2})
        .to(rhythms,2,{autoAlpha:0,delay:-2});
    }

  })

  .controller('PreferencesCtrl',function(){})

  .controller('AboutCtrl',function(){})

  .controller('PlaylistCtrl',function($state, $scope){
    var song = document.createElement('audio');

    $scope.playSong = function(id){
      if (!$scope.playingMusic){
        if (id == null){
          id = $scope.currentSong;
        }
        song.setAttribute('src',$scope.trackList[id].srcSong);
        song.play();
        document.getElementById($scope.currentSong).className+=" playing";
        $scope.playingMusic = true;
      }
    }


  })

  .controller('MenuCtrl',function($state, $scope){
      var trackList = [new Track(0,"Velha Infância","Tribalistas","../img/album-tribalistas.png","../audio/velha-infancia.mp3")];
      trackList.push(new Track(1,"A dor desse amor","KLB","../img/album-klb.png","../audio/a-dor-desse-amor.mp3"));
      trackList.push(new Track(2,"Bem querer","Mauricio Manieri","../img/album-manieri.png","../audio/bem-querer.mp3"));
      trackList.push(new Track(3,"Quando Você Passa","Sandy & Junior","../img/album-sandyjunior.png","../audio/quando-voce-passa.mp3"));
      $scope.trackList = trackList; //playlist geral
      $scope.currentSong = 0; //armazena o id da musica corrente a ser tocada ou que está tocando
      $scope.playingMusic = false; //indica se há alguma música tocando ou não
  });
