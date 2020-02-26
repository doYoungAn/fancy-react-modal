import React, { FC } from 'react';
import ReactDOM from 'react-dom';

class ModalService {

  private prefix: string = 'modal-parent';
  private count: number = 0;
  private bodyElement: HTMLElement = document.getElementsByTagName('body')[0];

  public open<T, U>(component: FC<T>, props: T): Promise<U> {
    return new Promise<U>((resolve, reject) => {
      const containerElement = document.createElement('div');
      const containerId: string = `${this.prefix}-${this.count}`;
      containerElement.setAttribute('id', containerId);
      this.bodyElement.append(containerElement);
      const dismiss = (result: U) => {
        ReactDOM.unmountComponentAtNode(containerElement);
        containerElement.parentNode.removeChild(containerElement);
        resolve(result);
      }
      const modalElement = React.createElement(component, { ...props, dismiss, containerId })
      ReactDOM.render(modalElement, containerElement);
      this.count++;
    });
  }

}

export const modalService = new ModalService();