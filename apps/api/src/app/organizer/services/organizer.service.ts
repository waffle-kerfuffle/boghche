import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FindUserInput } from "../../user/dto/in/findUser.in";
import { Organizer } from "../model/organizer.entity";

@Injectable()
export class OrganizerService {
  
  constructor(
    @InjectRepository(Organizer)
    private organizerRepo: Repository<Organizer>,
    
  ) { }

  async findOrganizer(findOrganizerArgs: FindUserInput): Promise<Organizer> {

    const organizer = await this.organizerRepo.findOne(findOrganizerArgs);
    return organizer;
  }

}
