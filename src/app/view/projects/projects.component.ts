import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit ,OnDestroy  {


  projects=[
    {
      im:"../../../assets/projects/kyrmina.png",
      name:"Kyrmina",
      url:"https://kyrminarubbercompany.web.app/Home",
      des:"Kyrmina for Rubber Products"
    },
    {
      im:"../../../assets/projects/maat.PNG",
      name:"MAAT",
      url:"https://ccdc.dance/Home",
      des:"MAAT|Cairo Contemporary Dance Center (MAAT|CCDC)"
    },
    {
      im:"../../../assets/projects/concorde.png",
      name:"Concorde",
      url:"https://concorde-press.com/partners",
      des:"Your Offest Printing House Since 1981"
    },
    {
      im:"assets/projects/maktabty.png",
      name:"maktabty",
      url:"https://andrew2020ayman.github.io/Maktabty/",
      des:"Good books don't give up all their secrets at once"
    },
    {
      im:"assets/projects/montana.jpg",
      name:"Montana",
      url:"https://andrew2020ayman.github.io/montanaHostTest/",
      des:"Unlock to enjoy the view of Martine"
    }
    ,{
      im:"assets/projects/musicPlayer.jpg",
      name:"My Music",
      url:"https://andrew2020ayman.github.io/Music-Player/Home",
      des:"“Music can change the world because it can change people.” ― Bono"
    }

  ]


  customOptions: any = {
    loop: true,
    dots: true,
    navSpeed: 700,
    mouseDrag:true,
     margin:0,
     animateOut: 'animate__fadeOutDown',
     animateIn: 'animate__fadeInLeft' ,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true, // Show next and prev buttons
    navText: [
      /* `<i class="fa fa-chevron-circle-left IconBtn" ></i> `,
      `<i class="fa fa-chevron-circle-right IconBtn" ></i> ` */
      `<p class="prevBtn"  > Prev </p> `,
      `<p class="nextBtn" > Next </p>  `
    ]

  };
currentItem;
countTemp;
activeProj=0;

constructor(  ) {

  $('body').addClass("projBody");

  $(document).ready(function() {
    var owl = $('.owl-carousel');
    this.activeProj = owl.find(".owl-item.active").index();

    if(!this.countTemp && ( this.activeProj  % 2 !== 0)){
      turnWhite();
       this.countTemp =true;
    }else{
      turnDark();
      this.countTemp = false;
    }
    this.activeProj = this.activeProj ;
  });

  function turnWhite(){
    $(".projBody").css("background","radial-gradient(at center center,#fefefe 21%, #d5dae0 51%)");
    $(".eyebrow").css("color","#373737");
    $(".eyebrow::before").css("color","#373737");
    $(".ProjectName").css("color","#373737");
    $(".projectDes").css("color","#373737");
    $(".prevBtn").css("color","#373737");
    $(".nextBtn").css("color","#373737");
    $(".visitBtn").css("color","#373737");
    $(".macbook__display").css("background","black");
    $(".macbook__display").css("box-shadow","inset -16px -5px 16px -5px grey, -15px -13px 19px -12px grey");

    $(".macbook__body").css("background","black");
    $(".macbook__body").css("box-shadow","inset -16px -5px 16px -5px grey, -15px -13px 19px -12px grey");

    $(".scrollComp").css("color","#373737");
    $(".scrollComp span").css(" border-left","1px solid #fff");
    $(".scrollComp span").css(" border-bottom","1px solid #fff");
  }
  function turnDark(){
    $(".projBody").css("background","radial-gradient(ellipse at center, rgba(1,1,1,0.80) 22%, #0d0d0f  103%)");
    $(".eyebrow").css("color","white");
    $(".eyebrow::before").css("color","white");
    $(".ProjectName").css("color","white");
    $(".projectDes").css("color","white");
    $(".prevBtn").css("color","white");
    $(".nextBtn").css("color","white");
    $(".visitBtn").css("color","white");
    $(".macbook__display").css("background","transparent");
    $(".macbook__display").css("box-shadow","inset -6px 13px 18px 0 black, 2px 6px 19px -12px white");

    $(".macbook__body").css("background","transparent");
    $(".macbook__body").css("box-shadow","inset -6px 13px 18px 0 black, 2px 6px 19px -12px white");

    $(".scrollComp").css("color","white");
    $(".scrollComp span").css(" border-left","1px solid white");
    $(".scrollComp span").css(" border-bottom","1px solid white");

  }

 }


  ngOnInit() {

      let scrollVal = true;
     this.countTemp = false;
    $(document).ready(function() {
      var owl = $('.owl-carousel');

      this.activeProj = owl.find(".owl-item.active").index();

      /* ----Mouse Wheel Event---- */
      owl.on("mousewheel", ".owl-stage", function(e) {
        if (scrollVal) {
          scrollVal = false;
          if (e.originalEvent.wheelDelta < 0) {

            owl.trigger("next.owl", [700]);
          } else {
            owl.trigger("prev.owl", [700]);
          }

          /* --- */
          var active = owl.find(".owl-item.active").index();

          if(!this.countTemp && ( active % 2 !== 0)){
            turnWhite();
             this.countTemp =true;
          }else{
            turnDark();
            this.countTemp = false;
          }
          this.activeProj = active;
          /* --- */
          e.preventDefault();
          setTimeout(() => {
            scrollVal = true;
            console.log(scrollVal + "after finish");
          }, 1000);
        }
      });

      /* ---------Mouse Drag Even-----------------  */
      owl.on("dragged.owl.carousel", function (event) {
        var active = owl.find(".owl-item.active").index();

        if(!this.countTemp && ( active % 2 !== 0)){
          turnWhite();
           this.countTemp =true;
        }else{
          turnDark();
          this.countTemp = false;
        }
        this.activeProj = active;
        });
     /* ---------owl dots Event-----------------  */
      $(".owl-dot").click(()=>{
        var active = owl.find(".owl-item.active").index();
        console.log(active);

        if(!this.countTemp && ( active % 2 !== 0)){
          turnWhite();
           this.countTemp =true;
        }else{
          turnDark();
          this.countTemp = false;
        }
        this.activeProj = active;
      });
      /* ---------Prev Event-----------------  */
      $(".owl-prev").click(()=>{

        var active = owl.find(".owl-item.active").index();
        if(!this.countTemp && ( active % 2 !== 0) && (active >-1 )){
          turnWhite();
           this.countTemp =true;
        }else{
          turnDark();
          this.countTemp = false;
        }
        this.activeProj = active;
      });
    /* ---------next Event-----------------  */
      $(".owl-next").click(()=>{

        var active = owl.find(".owl-item.active").index();
        if(!this.countTemp && ( active % 2 !== 0) &&(active < 3) ){
          turnWhite();
          this.countTemp =true;
        }else{
          turnDark();
          this.countTemp = false;
        }
        this.activeProj = active;
      });


      function turnWhite(){
        $(".projBody").css("background","radial-gradient(at center center,#fefefe 21%, #d5dae0 51%)");
        $(".eyebrow").css("color","#373737");
        $(".eyebrow::before").css("color","#373737");
        $(".ProjectName").css("color","#373737");
        $(".projectDes").css("color","#373737");
        $(".prevBtn").css("color","#373737");
        $(".nextBtn").css("color","#373737");
        $(".visitBtn").css("color","#373737");
        $(".macbook__display").css("background","black");
        $(".macbook__display").css("box-shadow","inset -16px -5px 16px -5px grey, -15px -13px 19px -12px grey");

        $(".macbook__body").css("background","black");
        $(".macbook__body").css("box-shadow","inset -16px -5px 16px -5px grey, -15px -13px 19px -12px grey");

        $(".scrollComp").css("color","#373737");
        $(".scrollComp span").css(" border-left","1px solid #373737");
        $(".scrollComp span").css(" border-bottom","1px solid #373737");

      }

      function turnDark(){
        $(".projBody").css("background","radial-gradient(ellipse at center, rgba(1,1,1,0.80) 22%, #0d0d0f  103%)");
        $(".eyebrow").css("color","white");
        $(".eyebrow::before").css("color","white");
        $(".ProjectName").css("color","white");
        $(".projectDes").css("color","white");
        $(".prevBtn").css("color","white");
        $(".nextBtn").css("color","white");
        $(".visitBtn").css("color","white");
        $(".macbook__display").css("background","transparent");
        $(".macbook__display").css("box-shadow","inset -6px 13px 18px 0 black, 2px 6px 19px -12px white");

        $(".macbook__body").css("background","transparent");
        $(".macbook__body").css("box-shadow","inset -6px 13px 18px 0 black, 2px 6px 19px -12px white");

        $(".scrollComp").css("color","white");
        $(".scrollComp span").css(" border-left","1px solid white");
        $(".scrollComp span").css(" border-bottom","1px solid white");

      }

    });



  }

ngOnDestroy(){
  $('body').removeClass("projBody");
  $('body').css("background","#1d1d1d");
}

}
