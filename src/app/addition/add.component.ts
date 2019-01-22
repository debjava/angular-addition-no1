import { Component } from "@angular/core";

@Component({
    selector: "app-add",
    templateUrl: "./add.component.html"
})
export class AddComponent {

    private firstNum: string;
    private secondNum: string;

    public resultByFunctionParams: any;

    public resultByNgModesl: any;

    public onClickAddNumberByFunctionParameters(firstNumber: string, secondNumber: string): void {
        let no1: number = parseInt(firstNumber);
        let no2: number = parseInt(secondNumber);
        this.resultByFunctionParams = (no1 + no2);
        console.log("Final result by passing function params :::" + this.resultByFunctionParams);
    }

    public onClickAddNumbersByNgModels(): void {
        let no1: number = parseInt(this.firstNum);
        let no2: number = parseInt(this.secondNum);
        let tempResult: number = no1 + no2;
        this.resultByNgModesl = tempResult;
        console.log("Final result from ngModels :::" + this.resultByNgModesl);
    }
}