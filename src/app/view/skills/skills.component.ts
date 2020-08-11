import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {

 
   images = [
    
    {
      im : "assets/Skills/html.jpg",
      name:"HTML"
    },
    {
      im : "assets/Skills/css.jpg",
      name:"CSS"
     },
    {
      im : "assets/Skills/nodejs1.jpg",
      name:"NODE JS"
    },
    {
      im : "assets/Skills/ang1.jpg",
      name:"ANGULAR"
    },
    {
     im : "assets/Skills/js.jpeg",
     name:"JAVA SCRIPT"
    },
    {
      im : "assets/Skills/bts.jpg",
      name:"BOOTSTRAP"  
    },
    {
      im : "assets/Skills/jqu2.png",
      name:"JQUERY"
    },
    {
      im : "assets/Skills/mdb.jpg",
      name:"MONGO DB"
    },
    {
      im : "assets/Skills/ts.jpg",
      name:"TYPE SCRIPT"
    },
    {
      im : "assets/Skills/git.png",
      name:"GIT"
    }
  ] 

  customOptions: any = {
    loop: true,
    dots: true,
    navSpeed: 700,
    mouseDrag:true,
     margin:0,
     slideTransition:"fade",
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
      `<p class="preBtn" > Prev </p> `,
      `<p class="nexBtn"> Next </p>  `
    ]
  };

  constructor( private elementRef: ElementRef) { 
     if ($("body").hasClass("projBody")){
      $('body').removeClass("projBody");
    } 
  }
 
  ngOnInit() {
    if( $('owl-dot span').hasClass("barDot")){
      $('owl-dot span').removeClass("barDot");
    }
    
    $(function()
    {
       $('div').mousemove(function(e)
      {   
          e.preventDefault();
         $('div').css('background-position', (e.pageX - 250) + 'px '+(e.pageY - 250) + 'px');
       
      });
    }); 
     
    const shadow = document.getElementById('shadow');
    
    document.addEventListener('mousemove', (e) => {
      let x = e.clientX - (document.documentElement.clientWidth * 1.5);
      let y = e.clientY - (document.documentElement.clientHeight * 1.5);
    })
  }

}

