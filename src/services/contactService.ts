import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactSubmission) {
  if (!db) {
    return { status: 'skipped' as const };
  }

  await addDoc(collection(db, 'contactSubmissions'), {
    ...data,
    createdAt: serverTimestamp(),
    status: 'new'
  });

  return { status: 'stored' as const };
}
