import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSidenavModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule,
    MatIconModule, MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    MatSelectModule, MatCardModule, MatGridListModule,
    MatCheckboxModule
  ],
  exports: [MatButtonModule, MatSidenavModule,
    MatListModule, MatMenuModule, MatIconModule, MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    MatSelectModule, MatCardModule, MatGridListModule,
    MatCheckboxModule
  ],
})
export class MaterialModule { }
