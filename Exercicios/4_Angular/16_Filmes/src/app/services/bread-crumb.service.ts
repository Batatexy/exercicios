import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {

  constructor() { }

  private actualRoute: string = "";

  public getActualRoute(): string {
    return this.actualRoute;
  }

  public setActualRoute(actualRoute: string): void {
    this.actualRoute = actualRoute;
  }

  public defineBreadCrumbs() {
    // let urlArray: Array<string> = this.router.snapshot.url.join().split(",");

    // for (let i: number = 0; i < urlArray.length; i++) {
    //   let pathString: string = "";

    //   for (let j: number = 0; j <= i; j++) {
    //     //Verificar se existe algo neste proximo elemento, senão em home fica : "Home - Home"
    //     if (urlArray[j]) {
    //       pathString += "/" + urlArray[j];
    //     }

    //     if (pathString != "") this.pathArray[i] = pathString;
    //   }

    //   //Alterar rotas se necessário:
    //   if (this.pathArray[i] == "/movie") this.pathArray[i] = "/movies";
    // }

    // //Caso não precise existir o Home, remover:
    // let finalPath = ["/"];
    // finalPath = finalPath.concat(this.pathArray);
    // this.pathArray = finalPath;
  }
}
