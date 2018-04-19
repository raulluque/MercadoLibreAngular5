import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'auth' },
            { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
            { path: 'listing', loadChildren: './listing/listing.module#ListingModule' },
            { path: 'questions', loadChildren: './questions/questions.module#QuestionsModule' },
            { path: 'sales', loadChildren: './sales/sales.module#SalesModule' },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
