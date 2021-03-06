import { Component, OnInit } from "@angular/core";
import { DataAccessService } from '../data-access.service';
import { OrderSummary } from "../data-access.service";
import { OrderItem } from "../data-access.service";
import { AuthenticationService } from "../authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})

export class OrderlistComponent implements OnInit {
  public gridView: any[] = [];
  public mySelection: string[] = [];
  
  constructor(private router: Router, private service: DataAccessService, private auth: AuthenticationService) {
     if (!auth.isAuthenticated) {
      this.router.navigate([""]);
     } else {
      service.orders$.subscribe((orderList: any) => {
        let products: any[] = [];

        orderList.map((order: OrderSummary) => {
          service.orderDetails$(order.id).subscribe((orderDetail: any) => {
            const total = orderDetail.reduce((total: number, item : OrderItem) => total + item.productPrice * item.quantity, 0)

            products.push ({
              customerName: order.buyerFullName,
              status: order.status,
              totalOrder: total
            })
          })
        })

        this.gridView = products;
      });
     }
   }

  public ngOnInit(): void {
   
  }

   

}
