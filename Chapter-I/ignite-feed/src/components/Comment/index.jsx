import { Avatar } from "../Avatar";

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.scss";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/igorsanm.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Santana</strong>
              <time dateTime="2023-01-15" title="15 de Janeiro às 18:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom, parabéns!!!</p>
        </div>

        <footer className={styles.footer}>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
