export interface Adapter<ForwardEntity, BackwardEntity> {
    readonly convertForwardToBackwardModel: (dtoEntity: ForwardEntity) => BackwardEntity;
  }