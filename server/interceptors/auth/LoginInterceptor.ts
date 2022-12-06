import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";

export class LoggingInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log("Before...");
    const now = Date.now();
    return next.handle().pipe(
      map((data) => {console.log('pending mapped data:', data); return data;})
      // tap(() => {console.log(`After...${Date.now() - now}`)})
    );
  }
}