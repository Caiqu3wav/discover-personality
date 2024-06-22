package com.wav.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wav.entities.MBTIType;
import org.springframework.stereotype.Repository;


@Repository
public interface MBTITypeRepository extends JpaRepository<MBTIType, Long> {

    MBTIType findByTypeName(String typeName);
}
