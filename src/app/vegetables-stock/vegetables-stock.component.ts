import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetables-stock',
  templateUrl: './vegetables-stock.component.html',
  styleUrls: ['./vegetables-stock.component.scss']
})
export class VegetablesStockComponent  
{
  
 constructor(private http: HttpClient, private router : Router){}

  ngOnInit(): void
  {
    this.getData();
  }
  products: any;
   Update(id:string)
   { 
      sessionStorage.setItem("up_product",id);  
      this.router.navigate(['/vegetables-list']);
      this.getData();
   }
   Delete(id: string) {
    const url = `https://retoolapi.dev/Sk4wew/vegetable/${id}`;
    this.http.delete(url).subscribe(
      () =>{ alert('Deleted Successfully..')
      this.getData()},
      err => console.log(err)
    );
  }
  sortsList(){
     
      this.products.sort((a: { vegetablenames: string; }, b: { vegetablenames: string; }) => {
        const nameA = a.vegetablenames.toUpperCase();
        const nameB = b.vegetablenames.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
  }

  getData()
  {
    this.http.get("https://retoolapi.dev/Sk4wew/vegetable").subscribe
      (
        data =>{ this.products = data; },
        err =>{ console.log(err); }
      );
  }
}
