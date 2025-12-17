// Meta Pixel Type Definitions
declare global {
  interface Window {
    fbq: ((action: string, eventName: string, data?: Record<string, any>, options?: Record<string, any>) => void) & {
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      push?: (args: any) => void;
      loaded?: boolean;
      version?: string;
    };
    _fbq?: any;
    _metaPixelInitialized?: boolean;
  }
}

export {};