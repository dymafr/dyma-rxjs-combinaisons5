screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { Observable, interval, forkJoin } from 'rxjs';
import { take, tap } from 'rxjs/operators';

// Création de streams
function createStream(
  name: string,
  iterations: number,
  intervalle: number
): Observable<any> {
  return interval(intervalle).pipe(
    take(iterations),
    tap((val) => console.log(`[ Stream ${name} ] : ${val}`))
  );
}

const streamA = createStream('A', 3, 100);
const streamB = createStream('B', 5, 200);
const streamC = createStream('C', 4, 50);

forkJoin([streamA, streamB, streamC], (a, b, c) => a + b + c)
  .pipe(tap((val) => console.log(`FORK_JOIN : ${val}`)))
  .subscribe();
