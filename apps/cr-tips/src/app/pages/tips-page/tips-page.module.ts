import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsPageComponent } from './tips-page/tips-page.component';
import { NzButtonModule, NzIconModule, NzTableModule, NzFormModule, NzInputModule, NzSelectModule, NzTagModule } from 'ng-zorro-antd';
import { CreateTipsComponent } from './create-tips/create-tips.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import 'quill-emoji/dist/quill-emoji.js'
import { TipsFacade } from './+state/tips.facade';
import { AuthGuard } from '../../core/guards/auth.guard';
import { TipsDetailComponent } from './tips-detail/tips-detail.component';


const routes: Routes = [
  { path:'', component: TipsPageComponent },
  { path:'create', component: CreateTipsComponent, canActivate: [AuthGuard] },
  { path: ':id', component: TipsDetailComponent}
];

const emojiIcon = '<svg class="i" viewBox="0 0 24 24"><use href="#emoticon-happy"></use></svg>';

@NgModule({
  declarations: [TipsPageComponent, CreateTipsComponent, TipsDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzTagModule,
    NzFormModule,
    NzInputModule,
    QuillModule.forRoot({
      modules: {
        'emoji-shortname': true,
        'emoji-textarea': false,
        'emoji-toolbar': true,
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // custom dropdown
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],                                         // remove formatting button
        ['link', 'image', 'video'],
        ['emoji']                        // link and image, video
      ],


    }
  })
  ],
  providers: [TipsFacade]
})
export class TipsPageModule { }
