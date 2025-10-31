declare module 'module' {
  interface NodeModule {
    hot?: {
      accept(): void;
      dispose(callback: () => void): void;
    };
  }
}
