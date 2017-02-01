import { OnDestroy } from "@angular/core";
export declare class ThreeBounceComponent implements OnDestroy {
    private visible;
    private timeout;
    delay: number;
    color: string;
    size: number;
    margin: string;
    isRunning: boolean;
    private cancel();
    ngOnDestroy(): any;
}
