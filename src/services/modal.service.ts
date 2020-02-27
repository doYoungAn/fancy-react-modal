import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './../components/wrapper';

class ModalService {

  private prefix: string = 'modal-parent';
  private count: number = 0;
  private bodyElement: HTMLElement = document.getElementsByTagName('body')[0];

  /**
   * @param   {FC<T>} component modal component
   * @param   {T}     props modal component props
   * @returns {U}     modal result interface    
   */
  public open<T, U>(component: FC<T>, props: T): Promise<U> {
    return new Promise<U>((resolve, reject) => {

      const containerElement = document.createElement('div');
      const containerId: string = `${this.prefix}-${this.count}`;
      containerElement.setAttribute('id', containerId);
      this.bodyElement.append(containerElement);

      const dismiss = (result?: U): void => {
        ReactDOM.unmountComponentAtNode(containerElement);
        containerElement.parentNode.removeChild(containerElement);
        this.count--;
        if (this.count < 1) this.bodyElement.style['overflow'] = 'auto';
        resolve(result);
      };
      const cancel = (): void => {
        ReactDOM.unmountComponentAtNode(containerElement);
        containerElement.parentNode.removeChild(containerElement);
        this.count--;
        if (this.count < 1) this.bodyElement.style['overflow'] = 'auto';
        reject();
      }
      const contentElement = React.createElement(
        component,
        { ...props, dismiss },
        ModalWrapper
      );
      const wrapperElement = React.createElement(
        ModalWrapper,
        { cancel, containerId },
        contentElement
      );

      ReactDOM.render(wrapperElement, containerElement);
      this.count++;
      this.bodyElement.style['overflow'] = 'hidden';
    });
  }

}

export const modalService = new ModalService();