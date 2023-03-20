package lt.codeacademy.last_exam.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@Getter
@Setter
public class PlayerDTO {
    private Long id;
    private String firstname;
    private String lastname;
    private String email;
    private String personalCode;
    private LocalDate chessStartDate;

}
