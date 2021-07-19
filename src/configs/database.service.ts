import { Logger, NotFoundException } from '@nestjs/common';
import * as util from 'util';

export class DatabaseService {
  dbClient;
  constructor() {
    this.initDb;
  }
  async initDb() {
    console.log('initializing db begun');

    const admin = require('firebase-admin');
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });

    this.dbClient = admin.firestore();
    Logger.log(`initting db`, util.inspect(this.dbClient));
    return this.dbClient;
  }

  async addRecord(collectionName: string, id: string, data: any) {
    const response = await this.dbClient
      .collection(collectionName)
      .doc(id)
      .set(data);

    return response;
  }
  async fetchOneRecord(collectionName: string, id: string) {
    const doc = await this.dbClient.collection(collectionName).doc(id).get();
    if (!doc.exists) {
      throw new NotFoundException('This document does not exist');
    }
    return doc;
  }

  async fetchStudentEnrollmentsRecordsById(
    collectionName: string,
    student_id: string,
  ) {
    const snapshot = await this.dbClient
      .collection(collectionName)
      .where('student_id', '==', student_id)
      .get();
    if (!snapshot.empty) {
      throw new NotFoundException('This document does not exist');
    }
    return snapshot.map((s) => s.data);
  }
  deleteRecord() {}
}
