package lt.codeacademy.last_exam.repositories;

import lt.codeacademy.last_exam.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
