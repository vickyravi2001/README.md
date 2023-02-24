import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-vegetables-list',
  templateUrl: './vegetables-list.component.html',
  styleUrls: ['./vegetables-list.component.scss']
})
export class VegetablesListComponent {


  constructor(private http: HttpClient) {

    this.loadProduct();
  }

  id: string = '';
  vegetablenames: string = '';
  price: string = "";
  title: string = "Add Product";
  buttonText: string = "ADD";
  isUpdate: boolean = false;

  resetData() {
    this.id = '';
    this.vegetablenames = '';
    this.price = '';
  }

  addProducts() {

    if (this.isUpdate) {
      this.updateProduct();
    } else {
      let products = {
        "id": this.id,
        "vegetablenames": this.vegetablenames,
        "price": this.price
      }
      this.http.post("https://retoolapi.dev/Sk4wew/vegetable", products).subscribe(
        () => {
          alert('Product Added Successfully..');

          this.resetData();
        },
        err => console.log(err)
      );
    }
  }

  updateProduct() {
    const product = {
      id: this.id,
      vegetablenames: this.vegetablenames,
      price: this.price
    };

    const url = `https://retoolapi.dev/Sk4wew/vegetable/${this.id}`;

    this.http.put(url, product).subscribe(
      () => {
        alert('Update Successfully..');
        this.resetData();
      },
      err => console.log(err)
    );
  }


  loadProduct() {

    let pid: any = sessionStorage.getItem('up_product') || '0';

    this.http.get("https://retoolapi.dev/Sk4wew/vegetable/" + pid).subscribe
      (
        data => {
          this.title = "Update Product";
          this.buttonText = "Update";
          let product: any = data;
          this.isUpdate = true;
          this.id = product.id;
          this.vegetablenames = product.vegetablenames;
          this.price = product.price;
          
          sessionStorage.removeItem('up_product');
        },
        err => { console.log(err); }
      );

  }


}
