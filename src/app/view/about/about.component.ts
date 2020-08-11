import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit ,AfterViewInit{

  constructor(private elementRef: ElementRef) { 
    if ($("body").hasClass("projBody")){
      $('body').removeClass("projBody");
    }
  }
  
ngAfterViewInit(){
  if ($("body").hasClass("projBody")){
    $('body').removeClass("projBody");
  } 
}
  ngOnInit() {

    setTimeout(() => {
      var element = document.getElementById("three");
       element.classList.remove("three");
       element.classList.remove("animate");
    }, 1000);

    if ($("body").hasClass("projBody")){
      $('body').removeClass("projBody");
    } 
   
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'black';

    setTimeout(() => {
      document.getElementById("AboutTxt").style.opacity="1";
      document.getElementById("pyramid").style.opacity="1";
    }, 1000);


    var windowWidth = $(window).width();

$('.page-container').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
  $('.page-back').css('margin-left', moveX + 'px');
  $('.page-back').css('margin-top', moveY + 'px');
  $('.page-front').css('margin-left', -moveX + 'px');
  $('.page-front').css('margin-top', -moveY + 'px');
});

  }


}
