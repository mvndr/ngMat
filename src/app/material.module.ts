import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
imports: [CommonModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatSelectModule],
exports: [CommonModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatSelectModule],
})
export class CustomMaterialModule { }