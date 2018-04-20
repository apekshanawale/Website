import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

	/* data : any = {
		photoshop : {
			title : "PhotoShop",
			heading : "PhotoShop Course",
			content : "<p>PhotoShop Course Content.</p>",
			image : "/assets/img/photoshop.jpg"
		},
		coreldraw : {
			title : "coreldraw",
			heading : "coreldraw Course",
			content : "<p>coreldraw Course Content.</p><p>coreldraw <strong>Course</strong> Content.</p>",
			image : "/assets/img/coreldraw.jpg"
		}
	} */
	
	data : any = {};
	
	pageData : any = {};
	
  constructor(public route : ActivatedRoute, public http : Http) {
	this.route.params.subscribe(params => {
		console.log(params);
		/*this.pageData = this.data[params.courseName];*/
		this.getData(params.courseName);
		console.log(this.pageData)
	})
  }
  
  getData(courseName){
	this.http.get("/assets/data.json").subscribe( res => {
		console.log(res.json());
		this.data = res.json();
		this.pageData = this.data[courseName] || {};
	}, err => {
		console.log(err);
	})
	
  }

  ngOnInit() {
  }

}
