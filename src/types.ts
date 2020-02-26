export interface IBaseModalProps<T> {
  containerId?: string;
  dismiss?: (result: T) => void;
}