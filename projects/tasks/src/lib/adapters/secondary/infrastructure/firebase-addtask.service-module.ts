import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAddtaskService } from './firebase-addtask.service';
import { ADDS_ADDTASK_DTO } from '../../../application/ports/secondary/adds-addtask.dto-port';
import { GETS_ALL_ADDTASK_DTO } from '../../../application/ports/secondary/gets-all-addtask.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseAddtaskService, { provide: ADDS_ADDTASK_DTO, useExisting: FirebaseAddtaskService }, { provide: GETS_ALL_ADDTASK_DTO, useExisting: FirebaseAddtaskService }],
	exports: []
})
export class FirebaseAddtaskServiceModule {
}
