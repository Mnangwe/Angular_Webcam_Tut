import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private trigger: Subject<any> = new Subject()
  public webcamImage?: WebcamImage
  private nextWebcam: Subject<any> = new Subject

  sysImage = ''

  ngOnInit(): void{ }
    public getSnapshot(): void {
      this.trigger.next(void 0)
    }
    public captureImage(webcamImage: WebcamImage){
      this.webcamImage = webcamImage
      this.sysImage = webcamImage.imageAsDataUrl
      console.info('got webcam image', this.sysImage)
    }
    public get invokeObservable(): Observable<any> {
      return this.trigger.asObservable()
    }
    public get nextWebcamObservable(): Observable<any> {
      return this.nextWebcam.asObservable()
    }
  

}
